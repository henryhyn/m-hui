import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */
    detectVerticalSquash(img) {
        let data;
        let ih = img.naturalHeight;
        let canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        try {
            // Prevent cross origin error
            data = ctx.getImageData(0, 0, 1, ih).data;
        } catch (err) {
            // hopeless, assume the image is well and good.
            console.log('Cannot check verticalSquash: CORS?');
            return 1;
        }
        // search image edge pixel position in case it is squashed vertically.
        let sy = 0;
        let ey = ih;
        let py = ih;
        while (py > sy) {
            let alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        let ratio = (py / ih);
        return (ratio === 0) ? 1 : ratio;
    }


    handleFile(file, cb) {
        let reader;
        if (typeof FileReader !== 'undefined') {
            reader = new FileReader();
        } else {
            if (window.FileReader) {
                reader = new window.FileReader();
            }
        }

        reader.onload = e => {
            let img;
            if (typeof Image !== 'undefined') {
                img = new Image();
            } else {
                if (window.Image) {
                    img = new window.Image();
                }
            }
            img.onload = ()=> {
                let w = Math.min(this.props.maxWidth, img.width);
                let h = img.height * (w / img.width);
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');

                //check canvas support, for test
                if (ctx) {
                    //patch subsampling bug
                    //http://jsfiddle.net/gWY2a/24/
                    let drawImage = ctx.drawImage;
                    ctx.drawImage = ((img, sx, sy, sw, sh, dx, dy, dw, dh) => {
                        let vertSquashRatio = 1;
                        // Detect if img param is indeed image
                        if (!!img && img.nodeName == 'IMG') {
                            vertSquashRatio = this.detectVerticalSquash(img);
                            sw || (sw = img.naturalWidth);
                            sh || (sh = img.naturalHeight);
                        }

                        // Execute several cases (Firefox does not handle undefined as no param)
                        // by call (apply is bad performance)
                        if (arguments.length == 9) {
                            drawImage.call(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
                        } else if (typeof sw != 'undefined') {
                            drawImage.call(ctx, img, sx, sy, sw, sh / vertSquashRatio);
                        } else {
                            drawImage.call(ctx, img, sx, sy);
                        }
                    }).bind(this);

                    canvas.width = w;
                    canvas.height = h;
                    ctx.drawImage(img, 0, 0, w, h);

                    let base64 = canvas.toDataURL('image/png');

                    cb({
                        lastModified: file.lastModified,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        data: base64
                    }, e);
                } else {
                    cb(file, e);
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    handleChange(e) {
        const langs = this.props.lang;
        let _files = e.target.files;

        if (_files.length === 0) {
            return;
        }

        if (this.props.files.length >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }

        for (let key in _files) {
            if (!_files.hasOwnProperty(key)) {
                continue;
            }
            let file = _files[key];

            this.handleFile(file, (_file, e)=> {
                if (this.props.onChange) {
                    this.props.onChange(_file, e);
                }
                ReactDOM.findDOMNode(this.refs.uploader).value = '';
            }, e);
        }
    }

    renderFiles() {
        return this.props.files.map((file, idx)=> {
            let {url, error, status} = file;
            let fileStyle = {
                backgroundImage: `url(${url})`
            };
            let cls = classNames({
                'hui-uploader-file': true,
                'hui-uploader-status': error || status
            });

            return (
                <li className={cls} key={idx} style={fileStyle} {...file}>
                    {
                        error || status ?
                            <div className="hui-uploader-status-content">
                                { error ? <i className="hui-icon-warn"></i> : status }
                            </div>
                            : false
                    }
                </li>
            );
        });
    }

    render() {
        const { className, title, maxCount, files, onChange } = this.props;
        const cls = classNames({
            'hui-uploader': true
        }, className);

        return (
            <div className={cls}>
                <div className="hui-uploader-hd hui-cell">
                    <div className="hui-cell-bd hui-cell-primary">{title}</div>
                    <div className="hui-cell-ft">{files.length}/{maxCount}</div>
                </div>
                <div className="hui-uploader-bd">
                    <ul className="hui-uploader-files">
                        {this.renderFiles()}
                    </ul>
                    <div className="hui-uploader-input-wrp">
                        <input
                            ref="uploader"//let react to reset after onchange
                            className="hui-uploader-input"
                            type="file"
                            accept="image/jpg,image/jpeg,image/png,image/gif"
                            onChange={this.handleChange.bind(this)}
                            {...this.props}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

Uploader.propTypes = {
    title: PropTypes.string,
    maxCount: PropTypes.number,
    maxWidth: PropTypes.number,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    files: PropTypes.array,
    lang: PropTypes.object
};

Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: {
        maxError: maxCount => `最多只能上传${maxCount}张图片`
    }
};

export default Uploader;
