# Create a Lightning component, BoatTile.cmp, that displays a boat for rent and has attribute boat of type Boat__c. Implement the tile as a themed lightning:button.
# Assign a class of tile to the lightning:button and use the following markup and CSS as a guide for how to show a boat’s picture inside BoatTile.cmp.


# When a user selects “All Types”, the empty string is passed to this function and it returns all boats.
# BoatSearchResults.cmp gets the data returned by BoatSearchResults using a helper method named onSearch(),
# which stores the search results in a component attribute boats.

# Next, BoatSearchResults.cmp loops through the results and displays each one as a BoatTile.cmp, arranged in a responsive grid with multiple rows as displayed in Figure 2.
# Use a <lightning:layout> configured to allow multiple rows in order to generate the layout.
# If the Apex class doesn’t return any results, display the message “No boats found” in the absolute center of BoatSearchResults.cmp.

# todo
# - return null from apex controllers
# -
# - fix styling
# -
# -
# -