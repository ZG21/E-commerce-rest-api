/** Dto */
const productDto = require("../../model/dto/product.dto");




exports.createProduct = (req, res, next) => {
    let prod = {
        idProduct: req.body.idProduct,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        calification: req.body.calification,
        discount: req.body.discount
    };
    productDto.create(prod, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
    });
};

exports.updateProduct = (req, res, next) => {
    let prod = {
        idProduct: req.body.id,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        calification: req.body.calification,
        discount: req.body.discount
    };
    productDto.update({ _id: req.body.id }, prod, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );

    });
};

exports.getAll = (req, res, next) => {

    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

exports.getById = (req, res, next) => {

    productDto.getById({ Id: req.params.idProduct }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

exports.deleteProduct = () => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();

    });
}