function wrap(element) {
    // create wrapper container
    var wrapper = document.createElement('div');
    wrapper.className = 'hscroll'
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

}
alltables = document.querySelectorAll('.article-content table')
for (i = 0; i < alltables.length; i++) {
    wrap(alltables[i]);
}
