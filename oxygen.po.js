module.exports = {
    searchPage: {
        url: '${baseUrl}', 
        searchBar: 'id=searchBar',
        hiddenBooks: 'li.ui-screen-hidden',
        visibleBooks: 'li:not(.ui-screen-hidden)',

        open: function() {
            mob.init()
            log.info('${baseUrl}')
            mob.open(this.po.searchPage.url)
        },

        search: function(query) {
            mob.type(this.po.searchPage.searchBar, query)
            mob.waitForExist(this.po.searchPage.hiddenBooks)
        },

        getNumberOfVisibleBooks: function() {
            return web.findElements(this.po.searchPage.visibleBooks).length
        }
    }
}