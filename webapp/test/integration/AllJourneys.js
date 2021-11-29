/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"au/com/bournedigital/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"au/com/bournedigital/test/integration/pages/Worklist",
	"au/com/bournedigital/test/integration/pages/Object",
	"au/com/bournedigital/test/integration/pages/NotFound",
	"au/com/bournedigital/test/integration/pages/Browser",
	"au/com/bournedigital/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "au.com.bournedigital.view."
	});

	sap.ui.require([
		"au/com/bournedigital/test/integration/WorklistJourney",
		"au/com/bournedigital/test/integration/ObjectJourney",
		"au/com/bournedigital/test/integration/NavigationJourney",
		"au/com/bournedigital/test/integration/NotFoundJourney",
		"au/com/bournedigital/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});