var formPanel = Ext.define('Contact', {
	extend: 'Ext.form.FormPanel',
	id: 'contactform',
	xtype: 'contactform',

	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],

	config: {
		title: 'Contact',
		iconCls: 'user',
		url: 'contact.php',

		items: [
            {
                xtype: 'fieldset',
                title: 'Form Example',
                instructions: 'Email field is not required',

                items: [
					{
						xtype: 'textfield',
						cls: 'fieldlabel',
						name: 'name',
						label: 'Name',
						labelAlign: 'top'
					},
					{
						xtype: 'emailfield',
						cls: 'fieldlabel',
						name: 'email',
						label: 'Email',
						labelAlign: 'top'
					},
					{
						xtype: 'passwordfield',
						cls: 'fieldlabel',
						name: 'password',
						label: 'Password',
						labelAlign: 'top'
					},
					{
						xtype: 'textareafield',
						cls: 'fieldlabel',
						name: 'message',
						label: 'Message',
						labelAlign: 'top'
					},
					{
                        xtype: 'datepickerfield',
						cls: 'fieldlabel',
                        name: 'date',
                        label: 'Start Date',
						labelAlign: 'top',
                        value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                        xtype: 'selectfield',
						cls: 'fieldlabel',
                        name: 'rank',
                        label: 'Rank',
                        labelAlign: 'top',
                        valueField: 'rank',
                        displayField: 'title',
                        store: {
                            data: [
                                { rank: 'master', title: 'Master'},
                                { rank: 'apprentice', title: 'apprentice'},
                                { rank: 'novoice', title: 'novoice'}
                            ]
                        }
                    },
                    {
                        xtype: 'spinnerfield',
						// cls: 'fieldlabel',
                        name: 'spinner',
                        label: 'Spinner',
                        labelAlign: 'top',
                        increment: 1
                    }
				]
            },
            {
            	xtype: 'button',
            	text: 'Send',
            	ui: 'confirm-round',
            	handler: function() {
            		this.up('contactform').submit();
            	}
            },
            {
            	xtype: 'toolbar',
	            docked: 'bottom',
	            layout: { pack: 'center' },
	            items: [
	                {
	                    xtype: 'button',
	                    text: 'Set Data',
	                    handler: function() {
	                        this.up('contactform').setValues({
	                            name: 'Seth',
	                            email: 'seth@sencha.com',
	                            password: 'secret'
	                        });
	                    }
	                },
	                {
	                    xtype: 'button',
	                    text: 'Get Data',
	                    handler: function() {
	                        Ext.Msg.alert('Form Values', JSON.stringify(this.up('contactform').getValues(),null, 2));
	                    }
	                },
	                {
	                    xtype: 'button',
	                    text: 'Clear Data',
	                    handler: function() {
	                        this.up('contactform').reset();
	                    }
	                }
	            ]
            }
        ]
	}
});