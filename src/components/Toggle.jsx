import '../Toggle.css'

export default function Toggle ({ handleChange, isChecked, theme }) {

    return (
        <div className='toogle mt-5 pr-5'>
            <input 
                type="checkbox"
                id="check"
                className="toggle mr-2"
                onChange={handleChange}
                checked={isChecked} 
            />
            <label htmlFor="check" className='title'> {theme ? 'Dark ' : 'Light '} </label>
        </div>
    )
}