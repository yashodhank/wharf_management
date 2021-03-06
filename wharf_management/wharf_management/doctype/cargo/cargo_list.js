// Copyright (c) 2017, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.listview_settings['Cargo'] = {
	add_fields: ["status"],
	has_indicator_for_draft: 1,
	get_indicator: function(doc) {

		if(doc.docstatus==0){
			if(doc.status=="Export"){
				return [__("Export"), "red", "status,=,Export"];
			} else{
				return [__("Draft"), "red", "status,=,"];
			}
		} else if(doc.status=== ""){
			return [__("Uploaded"), "purple", "status,=,"];
			
		} else if (doc.status === "Export"){
			return [__("Export"), "red", "status,=,Export"];
		
		} else if (doc.status === "Outbound"){
			return [__("Outbound"), "black", "status,=,Outbound"];

		} else if (doc.status === "Inspection"){
			return [__("Inspection"), "green", "status,=,Inspection"];

		} else if (doc.status === "Yard"){
			return [__("Yard"), "purple", "status,=,Yard"];

		} else if (doc.status === "Paid"){
			return [__("Paid"), "orange", "status,=,Paid"];

		} else if (doc.status === "Gate1"){
			return [__("Passed Gate1"), "blue", "status,=,Gate1"];

		}else if (doc.status === "Gate2"){
			return [__("Outward"), "green", "status,=,Gate2"];
		}
	}
};
