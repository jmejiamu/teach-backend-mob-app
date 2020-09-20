const showdata = async (req, res, db) => {
    try {
        const data = await db.select('*').from('products_items');
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    showdata
}