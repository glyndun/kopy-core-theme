// Button examples
var buttonExampleCode = '\n<button type="button" class="btn btn-primary">Button</button>';
var buttonExampleHtml = Prism.highlight(buttonExampleCode, Prism.languages.html, 'html');
$('#button_example').html(buttonExampleHtml);

// Button themes
var buttonThemesCode = '\n<button type="button" class="btn btn-primary">Button A</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-secondary">Button B</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-success">Button C</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-danger">Button D</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-warning">Button E</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-info">Button F</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-dark">Button G</button>\n';
buttonThemesCode += '<button type="button" class="btn btn-light">Button H</button>';
var buttonThemesHtml = Prism.highlight(buttonThemesCode, Prism.languages.html, 'html');
$('#button_themes').html(buttonThemesHtml);

// Outline buttons
var buttonOutlineCode = '\n<button type="button" class="btn btn-outline-primary">Button A</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-secondary">Button B</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-success">Button C</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-danger">Button D</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-warning">Button E</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-info">Button F</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-dark">Button G</button>\n';
buttonOutlineCode += '<button type="button" class="btn btn-outline-light">Button H</button>';
var buttonOutlineHtml = Prism.highlight(buttonOutlineCode, Prism.languages.html, 'html');
$('#button_outlines').html(buttonOutlineHtml);

// Rounded buttons
var buttonRoundedCode = '\n<button type="button" class="btn btn-primary btn-rounded">Button A</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-secondary btn-rounded">Button B</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-success btn-rounded">Button C</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-danger btn-rounded">Button D</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-warning btn-rounded">Button E</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-info btn-rounded">Button F</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-dark btn-rounded">Button G</button>\n';
buttonRoundedCode += '<button type="button" class="btn btn-light btn-rounded">Button H</button>';
var buttonRoundedHtml = Prism.highlight(buttonRoundedCode, Prism.languages.html, 'html');
$('#button_rounded').html(buttonRoundedHtml);

// Rounded outline buttons
var buttonRoundedOutlineCode = '\n<button type="button" class="btn btn-outline-primary btn-rounded">Button A</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-secondary btn-rounded">Button B</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-success btn-rounded">Button C</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-danger btn-rounded">Button D</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-warning btn-rounded">Button E</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-info btn-rounded">Button F</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-dark btn-rounded">Button G</button>\n';
buttonRoundedOutlineCode += '<button type="button" class="btn btn-outline-light btn-rounded">Button H</button>';
var buttonRoundedOutlineHtml = Prism.highlight(buttonRoundedOutlineCode, Prism.languages.html, 'html');
$('#button_rounded_outline').html(buttonRoundedOutlineHtml);

// Button circles
var buttonCircleCode = '\n<button type="button" class="btn btn-primary btn-circle"><i class="fa fa-download"></i></button>';
buttonCircleCode += '\n<button type="button" class="btn btn-info btn-circle">\n';
buttonCircleCode += '\t<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">\n';
buttonCircleCode += '\t\t<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />\n';
buttonCircleCode += '\t</svg>\n';
buttonCircleCode += '</button>';
var buttonCircleHtml = Prism.highlight(buttonCircleCode, Prism.languages.html, 'html');
$('#button_circle').html(buttonCircleHtml);

// Button mixed
var buttonMixedCode = '\n<button type="button" class="btn btn-circle btn-outline-danger">';
buttonMixedCode += '\n\t<i class="fa fa-trash"></i>\n</button>';
buttonMixedCode += '\n<button type="button" class="btn btn-circle btn-success btn-sm">';
buttonMixedCode += '\n\t<i class="fa fa-twitter"></i>\n</button>';
buttonMixedCode += '\n<button type="button" class="btn btn-circle btn-info btn-lg">';
buttonMixedCode += '\n\t<i class="fa fa-share-alt"></i>\n</button>';
var buttonMixedHtml = Prism.highlight(buttonMixedCode, Prism.languages.html, 'html');
$('#button_mixed').html(buttonMixedHtml);

// Button icon
var buttonIconCode = '\n<button type="button" class="btn btn-primary">\n\t<i class="fa fa-thumbs-up"></i>\n</button>';
var buttonIconHtml = Prism.highlight(buttonIconCode, Prism.languages.html, 'html');
$('#button_icon').html(buttonIconHtml);

// Button sizes
var buttonSizesCode = '\n<button type="button" class="btn btn-primary btn-sm">Small</button>';
buttonSizesCode += '\n<button type="button" class="btn btn-primary">Normal</button>';
buttonSizesCode += '\n<button type="button" class="btn btn-primary btn-lg">Large</button>';
var buttonSizesHtml = Prism.highlight(buttonSizesCode, Prism.languages.html, 'html');
$('#button_sizes').html(buttonSizesHtml);

// Button states
var buttonStatesCode = '\n<button type="button" class="btn btn-primary">Active</button>';
buttonStatesCode += '\n<button type="button" class="btn btn-primary disabled">Disabled</button>';
buttonStatesCode += '\n<button type="button" class="btn btn-primary btn-loading disabled">Loading</button>';
var buttonStatesHtml = Prism.highlight(buttonStatesCode, Prism.languages.html, 'html');
$('#button_states').html(buttonStatesHtml);

// Button icons
buttonIconsCode = '\n<a class="btn btn-info" style="background-color: #06b6d4;" href="#!" role="button">';
buttonIconsCode += '\n\t<i class="fa fa-twitter me-2"></i>';
buttonIconsCode += '\n\tTwitter';
buttonIconsCode += '\n</a>';
buttonIconsCode += '\n<a class="btn btn-primary" style="background-color: #0ea5e9;" href="#!" role="button">';
buttonIconsCode += '\n\tFacebook';
buttonIconsCode += '\n\t<i class="fa fa-facebook ms-2"></i>';
buttonIconsCode += '\n</a>';
var buttonIconsHtml = Prism.highlight(buttonIconsCode, Prism.languages.html, 'html');
$('#button_icons').html(buttonIconsHtml);

// Only icons
onlyIconsCode = '\n<a style="color: #06b6d4;" href="#!" role="button">';
onlyIconsCode += '\n\t<i class="fa fa-twitter fa-lg"></i>';
onlyIconsCode += '\n</a>';
onlyIconsCode += '\n<a style="color: #0ea5e9;" href="#!" role="button">';
onlyIconsCode += '\n\t<i class="fa fa-facebook fa-lg"></i>';
onlyIconsCode += '\n</a>';
var onlyIconsHtml = Prism.highlight(onlyIconsCode, Prism.languages.html, 'html');
$('#only_icons').html(onlyIconsHtml);

// Block buttons
var blockButtonCode = '\n<div class="d-grid gap-2"><button class="btn btn-primary" type="button">Button</button></div>';
var blockButtonHtml = Prism.highlight(blockButtonCode, Prism.languages.html, 'html');
$('#block_buttons').html(blockButtonHtml);
