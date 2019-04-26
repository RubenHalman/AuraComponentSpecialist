({
    doInit: function (component, helper, event) {
        var isEnabled = $A.get("e.force:createRecord");
        if (isEnabled) {
            component.set("v.createRecordContext", true);
        }
        console.log('component.set("v.createRecordContext") = ', component.set("v.createRecordContext"));
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                let boatTypes =  response.getReturnValue();
                component.set("v.boatTypes", boatTypes);
                console.log('boatTypes = ', boatTypes);
            } else {
                console.log('BSFC response.getError() = ', response.getError());
            }
        });
        $A.enqueueAction(action);
    },
    searchBoatsByType: function (component, helper, event) {

        var selectedBoatType = component.get("v.selectedBoatType");
    },
    newBoat: function (component, helper, event) {
        var selectedBoatType = component.get("v.selectedBoatType");
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'BoatType__c' : selectedBoatType
            }
        });
        createRecordEvent.fire();
    }
});