import React,{Component} from 'react' ;
import BrandGroupTitle from './BrandGroupTitle.jsx' ;
import BrandItem from './BrandItem.jsx' ;

export default class BrandGroupPanel extends Component{
    render(){
        return (
            <div className="panel panel-default brand_group">
                <div className="panel-heading">
                    <div className="panel-title">
                        <div className="panel-title">
                            <BrandGroupTitle />
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <ul>
                        <BrandItem/>
                        <BrandItem/>
                        <BrandItem/>
                        <BrandItem/>
                    </ul>
                </div>
            </div>
        ) ;
    }
}





