import React from 'react';

const BookViewer = (props) => {
    return (
        <div className = "row row-spacer"> 
                    <div className = "col-md-4">
                        {/* Previous Button */}
                        <button onClick = {props.previousBook}>Previous Book</button>
                    </div>
                    <div className = "col-md-4">
                        {/* Display book w/cover */}
                        <h1>{props.book.title}</h1>
                        <h4>{props.book.author}</h4>
                    </div>
                    <div className = "col-md-4">
                        {/* Next button */}
                        <button onClick = {props.nextBook}>Next Book</button>
                    </div>
              </div>
      );
}
 
export default BookViewer;