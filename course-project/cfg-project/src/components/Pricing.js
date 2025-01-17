import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import PricingHeader from './PricingHeader';
import PricingContent from './PricingContent';

class Pricing extends Component {
    render() {
        return (
            <div className="pricingPage">
                <PricingHeader/>
                    <div className="pricing-section section-padding">
                        <PricingContent/>
                    </div>
                <SubscribeSection/>
            </div>
        );
    }
}

export default Pricing;
