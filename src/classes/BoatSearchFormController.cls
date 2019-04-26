public with sharing class BoatSearchFormController {

    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Id, Name FROM BoatType__c];
    }

}