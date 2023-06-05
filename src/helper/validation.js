function isValidId(req, res, next) {
    const { id } = req.params
    if (!id) throw new Error('not found id')
    next()
}

module.exports = { isValidId }