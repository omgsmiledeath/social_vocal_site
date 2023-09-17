import React from "react";
import css from './DayView.module.css';
class DayView extends React.Component {
    
    onChangeInput = (e) => { this.props.ChangeInputStatus(Number(e.target.id)) };
    inputEntries = () => this.props.inputEntries.map(item => {
        let stat;
        let cssbtn ;
        switch (item.status) {
            case 'CONFIRMED_STATUS':
                stat = "Подтверженно"
                cssbtn = true
                break;
            case 'NOT_APPROVED_STATUS':
                stat = "Не подтвержденно"
                cssbtn = false
                break;
            default:
                stat = "Доступно"
                cssbtn = false
                break;
        }
             return (<label key={item.id} className={css['checkbox_btn']}>
                 <input type="checkbox" 
                     key={item.id} id={item.id} onChange={this.onChangeInput}
                     checked={item.checked} disabled={item.disabled}  readOnly={cssbtn}/>
                 <span>{item.date.getHours()}:00 - {stat}</span>
             </label>
             );
             
         });
         
    componentDidMount(){
        this.props.FiltredEntries(this.props.selectedDay); 
    }
    
    render() {
        debugger
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