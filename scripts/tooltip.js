function setTooltipWidth(element) {
    const tooltip = element.querySelector('.tooltiptext');
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    tooltip.style.width = tooltipWidth + 'px';
  }