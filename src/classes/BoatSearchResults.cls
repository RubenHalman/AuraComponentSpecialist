public with sharing class BoatSearchResults {

    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(String boatTypeId) {
        List<Boat__c> boats = new List<Boat__c>();
        If (boatTypeId != null && !String.isEmpty(boatTypeId))
        {
            boats = [SELECT BoatType__c,
                            Contact__c,
                            Contact__r.Name,
                            Description__c,
                            Geolocation__Latitude__s,
                            Geolocation__Longitude__s,
                            Id,
                            Name,
                            Length__c,
                            Picture__c,
                            Price__c,
                            Year_Built__c
                    FROM Boat__c
                    WHERE BoatType__c = :boatTypeId];
        } Else
        {
            boats = [SELECT BoatType__c,
                            Contact__c,
                            Contact__r.Name,
                            Description__c,
                            Geolocation__Latitude__s,
                            Geolocation__Longitude__s,
                            Id,
                            Name,
                            Length__c,
                            Picture__c,
                            Price__c,
                            Year_Built__c
                    FROM Boat__c];
        }
        return boats;
    }
}