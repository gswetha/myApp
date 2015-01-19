Ext.define('MyApp.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',

		scrollable: true,
		styleHtmlContent: true,

		html: [
            '<img height="260" src="http://staging.sencha.com/img/sencha.png">',
            '<h1>Welcome to Sencha Touch</h1>',
            "<p>We're creating the Getting Started app, which demonstrates how ",
            "to use tabs, lists, and forms to create a simple app.</p>",
            '<h2>Sencha Touch</h2>'
        ].join("")
	}
})