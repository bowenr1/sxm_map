var markers = [
    {
        lat: 18.0425,
        lng: -63.0548,
        title: "Updated Article 1 Title",
        excerpt: "This is an excerpt for Article 1.",
        tags: "tag1, tag2, tag3",
        url: "https://example.com/article1"
    },
    {
        lat: 18.0500,
        lng: -63.0600,
        title: "Article 2",
        excerpt: "This is an excerpt for Article 2.",
        tags: "tag4, tag5",
        url: "https://example.com/article2"
    }
];

markers.forEach(function(marker) {
    var popupContent = `
        <div class="popup-content">
            <h3 class="popup-title">${marker.title}</h3>
            <p class="popup-excerpt">${marker.excerpt.split(" ").slice(0, 5).join(" ")}...</p>
            <p class="popup-tags">${marker.tags.split(", ").slice(0, 5).join(", ")}</p>
            <p><a href="${marker.url}" target="_blank" class="popup-link">Read more</a></p>
        </div>
    `;

    var markerInstance = L.marker([marker.lat, marker.lng])
                         .bindPopup(popupContent)
                         .addTo(map);

    markerInstance.on('click', function(e) {
        this.openPopup();
    });
});
