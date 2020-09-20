const addPost = async (req, res, db) => {
    try {
        const { product_name, img_url, description, cost } = req.body;
        const data = await db.insert({
            product_name: product_name,
            img_url: img_url,
            description: description,
            cost: cost
        }).into('products_items')
        res.status(200).send({ post: 'DATA INSERTED' })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    addPost
}