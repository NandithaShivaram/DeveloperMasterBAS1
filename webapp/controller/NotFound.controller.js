sap.ui.define([
		"au/com/bournedigital/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("au.com.bournedigital.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);