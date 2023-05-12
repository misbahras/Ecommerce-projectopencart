describe('login test',function(){
    it('test',function(){
        cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')
        cy.url().should('include','opencart')
        cy.get('div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item.dropdown:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a.nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get('div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item.dropdown:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a.nav-link').should('be.visible').click()
        cy.contains('Mac')
        cy.get('[formaction="https://demo.opencart.com/index.php?route=checkout/cart|add&language=en-gb"] > .fas').click()
        cy.contains(' Success: You have added iMac to your shopping cart!')
        
        

    
        
       



        

        })

    })