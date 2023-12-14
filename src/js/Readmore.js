function toggleMore() {
	const moreProducts = document.getElementById('moreProducts')
	const btnText = document.getElementById('moreProductsBtnText')

	if (moreProducts.classList.contains('flex')) {
		btnText.innerHTML = ' Se flere '
        moreProducts.classList.toggle('hidden')
        moreProducts.classList.toggle('flex')
	} else {
        btnText.innerHTML = ' Se færre '
        moreProducts.classList.toggle('hidden')
        moreProducts.classList.toggle('flex')
	}
}
