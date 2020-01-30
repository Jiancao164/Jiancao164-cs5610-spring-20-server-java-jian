(function () {

    let userService = new AdminUserServiceClient();

    let users = [{id: 123, username: 'alicetttttt', firstName: 'Alicetttttt', lastName: 'Tim', role:'Faculty'},
        {id: 234, username: 'bobfffff', firstName: 'Bobgffffff', lastName: 'Lovelace', role:'Faculty'},];
    let userList = $(".wbdv-user");
    let usernameFld = $("#username-fld");



    const renderUsers = () => {
        //userList.empty();
        const rowTempalte = jQuery('.wbdv-template');
        const tbody = jQuery('tbody');
        for (var u in users) {
            const user = users[u];
            const rowClone = rowTempalte.clone();
            rowClone.removeClass('wbdv-hidden');
            rowClone.find('.wbdv-username').html(user.username);
            rowClone.find('.wbdv-first-name').html(user.firstName);
            rowClone.find('.wbdv-last-name').html(user.lastName);
            rowClone.find('.wbdv-role').html(user.role);
            let h1 = $("h1");
            h1.html("User Admin Screens!!!");
            tbody.append(rowClone);
        }
    };
    renderUsers();

    let currentUserId = -1;
    const editUser = index => {
        const userId = users[index]._id;
        currentUserId = userId;
        userService.findUserById(userId)
            .then(user => {
                console.log(user);
                usernameFld.val(user.username);
                firstNameFld.val(user.firstName);
                lastNameFld.val(user.lastName);
                roleFld.val(user.role);
            })
    };
    const editBtn = $(".wbdv-edit");
    editBtn.click(editUser);
    const deleteUser = (index) => {

        const userId = users[index]._id;
        userService.deleteUser(userId)
            .then(response => {
                users.splice(index, 1);
                renderUsers()
                // findAllUsers()
            })

    };
    const removeBtn = $(".wbdv-remove");
    removeBtn.click(deleteUser);

    const updateUser = () => {
        const username = usernameFld.val();
        //const password = passwordFld.val();
        const firstName = firstNameFld.val();
        const lastName = lastNameFld.val();
        const role = roleFld.val();
        usernameFld.val("");
        firstName.val("");
        lastName.val("");
        role.val("");

        userService.updateUser(currentUserId, {username: username, firstName: firstName, lastName: lastName, role: role})
            .then(newUser => {
                users.push(newUser);
                renderUsers()
                //findAllUsers()
            })

    };

    const updateBtn = $(".wbdv-update");
    updateBtn.click(updateUser);

    const createUser = () => {
        const username = usernameFld.val();
        //const password = passwordFld.val();
        const firstName = firstNameFld.val();
        const lastName = lastNameFld.val();
        const role = roleFld.val();
        usernameFld.val("");
        firstName.val("");
        lastName.val("");
        role.val("");

        userService.createUser({username: username, firstName: firstName, lastName: lastName, role: role})
            .then(newUser => {
                users.push(newUser);
                renderUsers()
                //findAllUsers()
            })
    };
    const createBtn = $(".wbdv-create");
    createBtn.click(createUser);

    const findAllUsers = () =>
        userService.findAllUsers()
            .then((theUsers) => {
                users = theUsers;
                renderUsers()
            });

    findAllUsers()


})();