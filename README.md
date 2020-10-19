# ordering-system-vue-vuex

## Setup and run
    npm install
    npm run serve


### TODO:
    Items block
    API requests - mocks , post request
    add sellers duplicate check
    component submit should be disabled after finalize
    more validations 
    

   
    
### Approach:
    
    vuex:
        Prepared raw json structure of the order object vuex state .
        Based on this setup working base vuex store 
        separate files for actions,getters, mutations and state.
        fetch fake data for client, contact and sellers using actions to create commits for the store.
        
    src:
        Folder structured having currentorder component as parent , details and sellers as child .
        created a copy of order so that all changes will be applied to it unless order is finalized.
        passed copy of orderDetail and seller to their individual components to ensure no data errors.
        

        OrderDetails:
            mapGetters and mapActions to communicate with store.
            
        Sellers:
            Iterated sellers array to render each seller component on button click
            Added an ID to each seller as unique identifier
            
        common:
            changes are applied only when submit is pressed from individual components.
            used events to pass submitted data back to parent 
            used bootstrap for form elements and other UI components
            validations using computed functions

            
  
### nice to have:
    serialize store to localstorage
    test cases
    remove seller
    use of validation library
    prodduction ready build