const Peer = window.Peer;

(async function main() {
  const localVideo = document.getElementById('js-local-stream');
  const localId = document.getElementById('js-local-id');
  const localId2 = document.getElementById('js-local-id2');
  const localId3 = document.getElementById('js-local-id3');
  const callTrigger = document.getElementById('js-call-trigger');
  const closeTrigger = document.getElementById('js-close-trigger');
  const remoteVideo = document.getElementById('js-remote-stream');
  const remoteId = document.getElementById('js-remote-id');
  const meta = document.getElementById('js-meta');
  const sdkSrc = document.querySelector('script[src*=skyway]');


  const localStream = await navigator.mediaDevices
    .getUserMedia({
      audio: true,
      video: true,
    })
    .catch(console.error);

  // Render local stream
  localVideo.muted = true;
  localVideo.srcObject = localStream;
  localVideo.playsInline = true;
  await localVideo.play().catch(console.error);

  const peer = new Peer("abc",{
    key: window.__SKYWAY_KEY__,
    debug: 3,
  });

  const peer2 = new Peer("def",{
    key: window.__SKYWAY_KEY__,
    debug: 3,
  });

  const peer3 = new Peer("ghi",{
    key: window.__SKYWAY_KEY__,
    debug: 3,
  });


//peer
  // Register caller handler
  callTrigger.addEventListener('click', () => {
    // Note that you need to ensure the peer has connected to signaling server
    // before using methods of peer instance.
    if (!peer.open) {
      return;
    }

    const mediaConnection = peer.call(remoteId.value, localStream);
    const dataConnection = peer.connect(remoteId.value);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for caller
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer.once('open', id => (localId.textContent = id));

  // Register callee handler
  peer.on('call', mediaConnection => {
    mediaConnection.answer(localStream);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for callee
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer.on('error', console.error);


//peer2
  // Register caller handler
  callTrigger.addEventListener('click', () => {
    // Note that you need to ensure the peer has connected to signaling server
    // before using methods of peer instance.
    if (!peer2.open) {
      return;
    }

    const mediaConnection = peer2.call(remoteId.value, localStream);
    const dataConnection = peer2.connect(remoteId.value);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for caller
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer2.once('open', id => (localId2.textContent = id));

  // Register callee handler
  peer2.on('call', mediaConnection => {
    mediaConnection.answer(localStream);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for callee
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer2.on('error', console.error);


//peer3
  // Register caller handler
  callTrigger.addEventListener('click', () => {
    // Note that you need to ensure the peer has connected to signaling server
    // before using methods of peer instance.
    if (!peer3.open) {
      return;
    }

    const mediaConnection = peer3.call(remoteId.value, localStream);
    const dataConnection = peer3.connect(remoteId.value);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for caller
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer3.once('open', id => (localId3.textContent = id));

  // Register callee handler
  peer3.on('call', mediaConnection => {
    mediaConnection.answer(localStream);

    mediaConnection.on('stream', async stream => {
      // Render remote stream for callee
      remoteVideo.srcObject = stream;
      remoteVideo.playsInline = true;
      await remoteVideo.play().catch(console.error);
    });

    mediaConnection.once('close', () => {
      remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      remoteVideo.srcObject = null;
    });

    closeTrigger.addEventListener('click', () => mediaConnection.close(true));
  });

  peer3.on('error', console.error);


})();
