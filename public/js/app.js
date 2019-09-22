const dom = {
        url: document.URL,
        domain: document.domain
    },
    token = $("meta[name='csrf-token']").attr("content"),
    formTodo_jq = $("#formTodo_jq"),
    deleteSelectedTodo_jq = $("#deleteSelectedTodo_jq"),
    msg_jq = $(".msg_jq"),
    todolist_jq = $(".todolist_jq");
msg_jq.hide(), deleteSelectedTodo_jq.hide();
const formTodo_ajx = $("#formTodo_ajx"),
    deleteSelectedTodo_ajx = $("#deleteSelectedTodo_ajx"),
    msg_ajx = $(".msg_ajx"),
    todolist_ajx = $(".todolist_ajx");
let todolist_array = [];

function getTodoList() {
    var e = {
            method: "get",
            url: dom.url + "get_todo",
            dataType: "json",
            cache: !0,
            processData: !0,
            beforeSend: function() {}
        },
        o = $.ajax(e);
    o.done(e => {
        let o = e.results;
        var t = "";
        $.each(o.data, (e, o) => {
            t += '<li><label><input type="checkbox" class="uk-checkbox todoajx_selected" value="' + o.todo_id + '" name="todoajx_selected[]" /> <span class="uk-margin-small-left">' + o.todo_name + "</li>"
        }), todolist_ajx.html(t), 0 !== o.total && deleteSelectedTodo_ajx.show()
    }), o.fail(e => {
        console.log(e.statusText)
    })
}
msg_ajx.hide(), deleteSelectedTodo_ajx.hide(), formTodo_jq.on("submit", e => {
    e.preventDefault();
    var o = $("#newtodo_jq");
    if ("" === o.val()) msg_jq.show(), msg_jq.html("Item must be required"), setTimeout(() => {
        msg_jq.hide()
    }, 3e3);
    else {
        const e = document.createElement("li");
        e.className = "items_jq", e.innerHTML = '<label><input type="checkbox" class="uk-checkbox todojq_selected" name="todojq_selected[]" /> <span class="uk-margin-small-left">' + o.val(), todolist_jq.append(e), deleteSelectedTodo_jq.show(), o.val(""), alert("Todo has been added.")
    }
}), deleteSelectedTodo_jq.on("click", e => {
    const o = $(".items_jq"),
        t = $(".todojq_selected");
    if (confirm("Are you sure want to delete?"))
        for (let e = 0; e < t.length; e++) !0 === t[e].checked && o[e].remove()
}), setTimeout(() => {
    getTodoList()
}, 1e3), formTodo_ajx.on("submit", e => {
    e.preventDefault();
    var o = $("#newtodo_ajx");
    if ("" === o.val()) msg_ajx.show(), msg_ajx.html("Item must be required"), setTimeout(() => {
        msg_ajx.hide()
    }, 3e3);
    else {
        var t = {
                method: "post",
                url: dom.url + "add_todo",
                data: {
                    newtodo: o.val()
                },
                headers: {
                    "X-CSRF-TOKEN": token
                },
                dataType: "json",
                cache: !0,
                processData: !0,
                beforeSend: function() {}
            },
            d = $.ajax(t);
        d.done(e => {
            o.val(""), getTodoList()
        }), d.fail(e => {
            console.log(e.statusText)
        })
    }
}), deleteSelectedTodo_ajx.on("click", e => {
    const o = $(".todoajx_selected");
    let t = [];
    for (let e = 0; e < o.length; e++) !0 === o[e].checked && t.push(o[e].value);
    if (confirm("Are you sure want to delete?")) {
        var d = {
                method: "delete",
                url: dom.url + "delete_todo",
                data: {
                    todos: t
                },
                headers: {
                    "X-CSRF-TOKEN": token
                },
                dataType: "json",
                cache: !0,
                processData: !0
            },
            a = $.ajax(d);
        a.done(e => {
            getTodoList()
        }), a.fail(e => {
            console.log(e.statusText)
        })
    }
});
