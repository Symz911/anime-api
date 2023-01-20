$('.search-button').on('click', function () {
  $.ajax({
    url: 'https://api.jikan.moe/v4/anime?q=' + $('.input-keyword').val(),
    success: result => {
      const animes = result.data;
      let cards = '';
      animes.forEach(data => {
        if (data.year === null) {
          data.year = 'Unknown'
        }
        const year = data.aired.prop.from.year;
  
        cards += `<div class="col-md-3 my-3">
                    <div class="card border-primary mb-3">
                      <img src="${data.images.jpg.image_url}" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#animeDetailModal">More Details</a>
                      </div>
                    </div>
                  </div>`;
      });
      $('.anime-container').html(cards);
    },
    error: (e) => {
      console.log(e.message);
    }
  });

});