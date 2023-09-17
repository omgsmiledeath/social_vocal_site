import React from "react";
import css from './DayView.module.css';
class DayView extends React.Component {
    
    onChangeInput = (e) => { this.props.ChangeInputStatus(Number(e.target.id)) };
    inputEntries = () => this.props.inputEntries.map(item => {
             return (<label key={item.id} className={css['checkbox_btn']}>
                 <input type="checkbox"
                     key={item.id} id={item.id} onChange={this.onChangeInput}
                     checked={item.checked} disabled={item.disabled} />
                 <span>{item.date.getHours()}:00</span>
             </label>
             );
         });
         
    componentDidMount(){
        this.props.FiltredEntries(this.props.selectedDay); 
    }
    
    render() {
        return (
            <div>
                <div className={css.wrapper}>
                    {this.inputEntries()}
                </div>

            </div>
        )
    }
}

export default DayView;