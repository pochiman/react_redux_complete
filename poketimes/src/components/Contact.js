import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
	// setTimeout(() => {
	// 	props.history.push('/about')
	// }, 2000);
	return (
    <div>
		  <div className="container">
			  <h4 className="center">Contact</h4>
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis aperiam magni incidunt, illum rerum facere similique! Veniam quas eum facilis dolores perspiciatis maxime quod consequatur sint? Sequi, praesentium quidem?</p>
		  </div>
    </div>
	)
}

export default Rainbow(Contact)