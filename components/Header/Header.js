class Header {
  handleOpenShoppingPage() {
    shoppingPage.render();
  }
  render(count) {
    const html = `
            <header class='header-container'>
                <div class='header-counter' onClick="headerPage.handleOpenShoppingPage()">${count}</div>
            </header>
        `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
