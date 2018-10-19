const loadDocs = function () {
    $.getJSON('/api/applist')
        .then(function (data) {
            const docItem = data.map((element) =>
                `
                <a class="open-doc-btn" id='${element._id}' href="/doc/${element._id}">
                    <div class="docPrev">
                        ${element.docContent}
                    </div>    
                    <div class="captionLabel">
                        <h2>${element.docTitle}</h2>
                        <div class="labelGroup">
                            <i class="fas fa-sticky-note"></i>
                            <h4> Open October 4, 2018</h4>
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                        <i class="fas fa-times" id='${element._id}'></i>
                    </div> 
                </a>
                `
            )
            $('#gdoclist').html(docItem);
            $('.fa-times').on('click', deleteDoc);
        })
};

const deleteDoc = function (event) {
    event.preventDefault();
    const id = event.target.id;
    $.ajax({ url: `/delete/${id}`, method: "DELETE" }).then(function () {
        loadDocs();
    });
}

loadDocs();

