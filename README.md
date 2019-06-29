cordova-plugin-vsms-w4b
========================
    This plugin opens a chat session with the given phonenumber in W4b on Android.

    The behavior is similar to the generic tel:, smsto:, or mailto: URL schemes on iOS and Android.
    iOS supports a generic URL scheme for w4b ("w4b://send?abid=").
    However on Android the URL scheme is currently not supported.
    This plugin implements the send-via-w4b functionality on Android.


Methods
-------

    - cordova.plugins.W4b.send

Example
-------
    Say you want to open a chat session with phone number: 111-222-3333

    cordova.plugins.W4b.send("1112223333");

    This will open a chat session in W4b for the target contact.

Installation
------------

    For cordova or ionic

        cordova plugin add https://github.com/presttec/cordova-plugin-vsms-w4b.git
        ionic   plugin add https://github.com/presttec/cordova-plugin-vsms-w4b.git

    Add the following xml to all the app config.xml file:

        <!-- for Android -->
        <feature name="W4b">
            <param name="android-package" value="br.com.vsms.W4b" />
        </feature>
