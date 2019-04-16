<template>
    <Page actionBarHidden="true">

        <StackLayout>

            <Image class="logo" src="~/images/logo1.png"></Image>
            <Label class="header" text="Barcode Scanner"></Label>

            <GridLayout rows="auto, auto, auto">
                <Button text="Scan" @tap="scanBarcode" class="button"></Button>
            </GridLayout>

            <TextView class="barcode-format">
                <FormattedString>
                    <Span text="Barcode format:    " fontWeight="Bold" />
                    <Span :text="barcodeFormat" backgroundColor="#efefef" />
                </FormattedString>
            </TextView>

            <TextView class="barcode-value-title">
                <FormattedString>
                    <Span text="Barcode  value:" fontWeight="Bold" />
                </FormattedString>
            </TextView>

            <TextView class="barcode-value">
                <FormattedString>
                    <Span :text="barcodeValue" />
                </FormattedString>
            </TextView>

            <Label text="Developed by Nils Endre Greenz" class="footer"></Label>

        </StackLayout>

    </Page>
</template>

<script>
    import { BarcodeScanner } from 'nativescript-barcodescanner';

    export default {
        data() {
            return {
                barcodeFormat: '',
                barcodeValue: '',
                barcodescanner: new BarcodeScanner
            };
        },
        methods: {
            scanBarcode() {
                this.barcodescanner.hasCameraPermission()
                .then(() => {
                    this.barcodescanner.scan({
                        formats: "",   // Pass in of you want to restrict scanning to certain types
                        cancelLabel: "EXIT   (volume buttons to adjust light)", // iOS only, default 'Close'
                        cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                        message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                        showFlipCameraButton: true,   // default false
                        preferFrontCamera: false,     // default false
                        showTorchButton: true,        // default false
                        beepOnScan: true,             // Play or Suppress beep on scan (default true)
                        torchOn: false,               // launch with the flashlight on (default false)
                        closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
                        resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                        orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
                        openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
                    })
                    .then(result => {
                        console.log("Scan format: " + result.format);
                        console.log("Scan text:   " + result.text); 
                        this.barcodeFormat = result.format;
                        this.barcodeValue = result.text;
                    })
                    .catch(e => {
                        console.log('Error BarcodeScanner.Scan: ', e);
                        this.barcodeFormat = "Error";
                        this.barcodeValue = "Error BarcodeScanner.Scan:  " + e;
                    });
                })
                .catch(e => {
                    console.log('Error requesting permission: ' + e);
                    this.barcodeFormat = "Error";
                    this.barcodeValue = "requesting permission:  " + e;
                });
            }
        }
    };
</script>

<style>
    .page {
        background-color: #ffffff;
    }

    .logo {
        width: 100;
        height: 100;
        margin-top: 30;
    }

    .header {
        font-size: 30;
        text-align: center;
        margin-top: 10;
    }

    .button {
        background-color: #3dae38;
        color: white;
        font-size: 20;
        width: 75%;
        margin-top: 40;
        border-radius: 10;
        height: 50;
    }

    .barcode-format {
        font-size: 20;
        margin: 100px 50px 0 50px;
    }

    .barcode-value-title {
        font-size: 20;
        margin: 0 50px;
    }

    .barcode-value {
        font-size: 20;
        margin: 0 50px;
        background-color: #efefef;
    }

    .footer {
        font-size: 10;
        text-align: center;
        margin-top: 10;
    }
</style>
