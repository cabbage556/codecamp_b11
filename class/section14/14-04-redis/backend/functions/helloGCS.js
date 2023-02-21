/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.helloGCS = (event, context) => {
  console.log('저는 트리거입니다!!');
  const gcsEvent = event;
  console.log(`Processing file: ${gcsEvent.name}`);
  // Processing file: 105.jpg
  console.log(`event: ${JSON.stringify(event)}`);
  //  event: {"bucket":"liberty556-storage","contentType":"image/jpeg","crc32c":"bo2TSQ==","etag":"CN2st+ilo/0CEAE=","generation":"1676868462696029","id":"liberty556-storage/105.jpg/1676868462696029","kind":"storage#object","md5Hash":"Wlwx+d3ENl1pbQuTutPt/g==","mediaLink":"https://storage.googleapis.com/download/storage/v1/b/liberty556-storage/o/105.jpg?generation=1676868462696029&alt=media","metageneration":"1","name":"105.jpg","selfLink":"https://www.googleapis.com/storage/v1/b/liberty556-storage/o/105.jpg","size":"2506889","storageClass":"STANDARD","timeCreated":"2023-02-20T04:47:42.705Z","timeStorageClassUpdated":"2023-02-20T04:47:42.705Z","updated":"2023-02-20T04:47:42.705Z"}
  console.log(`context: ${JSON.stringify(context)}`);
  // context: {"eventId":"7022935449347088","eventType":"google.storage.object.finalize","resource":{"name":"projects/_/buckets/liberty556-storage/objects/105.jpg","service":"storage.googleapis.com","type":"storage#object"},"timestamp":"2023-02-20T04:47:42.99Z"}
};
