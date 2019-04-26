({
    onSearch: function (component) {
        var boatTypeId = "";
        var action = component.get('c.getBoats');
        action.setParam({"boatTypeId": ''});
        action.setCallback(this, function (response) {
            if (response.getState() === 'SUCCESS') {
                if (!$A.util.isEmpty(response.getReturnValue())) {
                    let boats = response.getReturnValue();
                    component.set("v.boats", boats);
                }
            }
        });
        $A.enqueueAction(action);
    }
})
