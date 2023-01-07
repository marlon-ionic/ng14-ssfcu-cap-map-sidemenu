# googleMaps: Touch position bugged on Android 13

This project is a simple reproduction of the issue reported at [https://github.com/ionic-team/capacitor-plugins/issues/1357](https://github.com/ionic-team/capacitor-plugins/issues/1357). It appears that touch events are not registered in the correct area of the screen in the example. This example is based on the Ionic [sidemenu starter](https://github.com/ionic-team/starters/tree/main/angular/official/sidemenu) project, with modiciations to add the [Capacitor Maps](https://capacitorjs.com/docs/apis/google-maps) plugin, as well as a lazy-loaded "map" page, which set as the default route. Per the issue reported, this project was created with as an Angular 14 starter. Latest Ionic 6 was added via `ng add @ionic/angular`, and the app.component was modified to be similar to the sidemenu starter. The `folder` folder pulled from the starter

## Preqrequisite

A valid [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) must be specified. You can do a find/replace for all references to `YOUR-GOOGLE-MAP-API-KEY`.

## Steps to Reproduce

1. Add your Google Maps API Key (replace references to `YOUR-GOOGLE-MAP-API-KEY`)
2. `npm run android`. This will run  `ng build`, `npx cap sync`, then `npx cap run android`
3. The app should launch with the 'Map' page as the default route
4. Tap the sidemenu button in the upper left
5. From the list, tap 'Trash'. You will most likely see the 'Spam' route triggered instead

## Other Notes

- The bottom option in the list, 'Spam' seems to consistently work as expected.
- But the items above it seem to trigger the event for the item below where you tap.
- It seems if you tap toward the top half of the list item, there's a higher success rate of triggering the intended item.

