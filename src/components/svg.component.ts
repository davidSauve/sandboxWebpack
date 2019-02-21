import Adapter from '../svg/adapter_16.svg';


import * as ko from 'knockout';//


export function addSvg()
{
    ko.components.register('my-svg', {
        viewModel: function(params : any) {
            this.mySvg = Adapter;
        },
        template:

            '<span data-bind="html: mySvg, css : \'icon-xs\'"></span>'
    });

    ko.applyBindings();
}




