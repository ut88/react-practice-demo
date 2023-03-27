import "./ExpenseFrom.css";
function ExpenseFrom(){
   const clickHandler=(event)=>{
        console.log(event.target.value);
    }
    return (
        <form className="new-expense__controls">
            <div className="new-expense__controls">
             <div className="new-expense__controls">   
            <label className="new-expense__control label">Title</label>
                <input  classname="new-expense__control input" type="text" onChange={clickHandler} />
            </div>
            <div className="new-expense__controls">   
            <label className="new-expense__control label">Amount</label>
                <input  classname="new-expense__control input" type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__controls">   
            <label className="new-expense__control label">Date</label>
                <input  classname="new-expense__control input" type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
            <button>ADD EXPENSE</button>
           </div> 
           </div>
        </form>
     )
}
 export default ExpenseFrom;