# -*- coding: utf-8 -*-
# Copyright (c) 2017, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import throw, _
from frappe.model.document import Document
from frappe.utils import formatdate
from datetime import datetime

class Yard(Document):


	def on_submit(self):
		self.update_yard_slot()
		self.update_export_status()
		self.update_yard_timestamp()


	def update_yard_slot(self):
    		if self.status != 'Export':
    				frappe.db.sql("""Update `tabCargo` set yard_slot=%s, yard_status="Closed", status='Yard' where name=%s""", (self.yard_slot, self.cargo_ref))

	def update_export_status(self):
    		if self.status == 'Export':
    				frappe.db.sql("""Update `tabCargo` set export_status="Yard", yard_slot=%s, gate1_status="Open", gate2_status="Open", payment_status="Open", yard_status="Open", inspection_status="Open" where name=%s""", (self.yard_slot, self.cargo_ref))

	def update_yard_timestamp(self):
		if not self.yard_time_stamp:
			 yard_time_stamp = datetime.now()
			