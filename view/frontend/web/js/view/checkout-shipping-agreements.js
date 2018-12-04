/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Bhavin_GDPR/js/view/default-checkout-agreements'
], function (AgreementsView) {
    'use strict';

    var checkoutConfig = window.checkoutConfig,
        agreementManualMode = 1,
        agreementsConfig = checkoutConfig ? checkoutConfig.checkoutAgreements : {};

    return AgreementsView.extend({
    	defaults: {
            template : 'ui/form/field',
            elementTmpl : 'Magento_CheckoutAgreements/checkout/checkout-agreements'
        }
        isVisible: agreementsConfig.isEnabledShipping,
        agreements: agreementsConfig.agreements.checkout_shipping_form,
    });
});
