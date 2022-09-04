import React from 'react'

export default function About(props) {

  let myStyle ={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    
  }

  return (
    <div className='container my-3' >
       <h1 className='my-3 mx-2' style={{ color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
        <div class="accordion" id="accordionPanelsStayOpenExample">
        
  <div class="accordion-item" style={{ color: props.mode === 'dark'?'white':'black'}}>
    
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
    
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
      <strong >Analyze your text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" style={myStyle}>
      <div class="accordion-body">
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything you want.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      TextUtils is a free character counter tool that provides instant character count & word count statitstics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      
      <div class="accordion-body">
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
