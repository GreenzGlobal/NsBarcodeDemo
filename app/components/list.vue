<template>
    <Page actionBarHidden="true">

        <StackLayout>

            <GridLayout rows="auto, auto, auto">
                <Button text="Scan" @tap="testTap" class="button"></Button>
            </GridLayout>

            <TextView class="barcode-value">
                <FormattedString>
                    <Span :text="test" />
                </FormattedString>
            </TextView>

            <Label text="Developed by Nils Endre Greenz" class="footer"></Label>

        </StackLayout>

    </Page>
</template>

<script>
    var firebase = require("nativescript-plugin-firebase");


    export default {
        data() {
            return {
                test: 'test'
            };
        },
        methods: {
            testTap() {
                this.test = "This is a test";
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
