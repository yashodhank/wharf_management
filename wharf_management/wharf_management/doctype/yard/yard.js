// Copyright (c) 2017, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Yard', {

	refresh: function(frm) {

	},

	onload: function(frm) {

		frappe.call({
			"method": "frappe.client.get",
						args: {
							doctype: "Cargo",
							name: frm.doc.cargo_ref,
							filters: {
								'status': ["!=", "Export"]
							},
						},
						callback: function (data) {
								cur_frm.set_value("cargo_ref", data.message["name"]);
								cur_frm.set_value("container_no", data.message["container_no"]);
								cur_frm.set_value("voyage_no", data.message["voyage_no"]);
								cur_frm.set_value("vessel", data.message["vessel"]);
								cur_frm.set_value("eta_date", data.message["eta_date"]);
								cur_frm.set_value("bol", data.message["bol"]);
								cur_frm.set_value("consignee", data.message["consignee"]);
								cur_frm.set_df_property("container_no", "read_only", 1);
								cur_frm.set_df_property("voyage_no", "read_only", 1);
								cur_frm.set_df_property("vessel", "read_only", 1);
								cur_frm.set_df_property("eta_date", "read_only", 1);
								cur_frm.set_df_property("bol", "read_only", 1);
								cur_frm.set_df_property("consignee", "read_only", 1);

							}
			})
		
		
		frappe.call({
			"method": "frappe.client.get",
						args: {
							doctype: "Cargo",
							name: frm.doc.cargo_ref,
							filters: {
								'status': ["=", "Export"]
							},	
						},
						callback: function (data) {
							cur_frm.set_value("cargo_ref", data.message["name"]);
							cur_frm.set_value("container_no", data.message["container_no"]);
							cur_frm.set_value("voyage_no", data.message["voyage_no"]);
							cur_frm.set_value("vessel", data.message["vessel"]);
							cur_frm.set_value("eta_date", data.message["eta_date"]);
							cur_frm.set_value("bol", data.message["bol"]);
							cur_frm.set_value("consignee", data.message["consignee"]);
							cur_frm.set_value("status", data.message["status"]);
							cur_frm.set_df_property("status", "read_only", 1);
							cur_frm.set_df_property("container_no", "read_only", 1);
							cur_frm.set_df_property("cargo_ref", "read_only", 1);
							cur_frm.set_df_property("voyage_no", "read_only", 1);
							cur_frm.set_df_property("vessel", "read_only", 1);
							cur_frm.set_df_property("eta_date", "read_only", 1);
							cur_frm.set_df_property("bol", "read_only", 1);
							cur_frm.set_df_property("consignee", "read_only", 1);
									
							}								
			})	

	}

});
