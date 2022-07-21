const API_KEY_MAPS = 'AIzaSyAOB__gt0j8qA2KGcpRg7NN91cyoO4cS3g';

export const URL_MAPS = (lat, lng, zoom= 16) =>`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:X%7C${lat},${lng}&key=${API_KEY_MAPS}`