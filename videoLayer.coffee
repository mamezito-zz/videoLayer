#author Sergiy Voronov
#https://twitter.com/mamezito
#based on  https://webrtc.github.io/samples/src/content/getusermedia/gum/
class exports.videoLayer extends Layer
	constructor: (options = {}) ->
		options = _.defaults options,
		html:'<video autoplay playsinline style="width:100%; height:100%;"></video>'
		super options
		handleSuccess = (stream) ->

		  videoTracks = stream.getVideoTracks()
		  console.log 'Got stream with constraints:', constraints
		  console.log 'Using video device: ' + videoTracks[0].label

		  stream.oninactive = ->
		    console.log 'Stream inactive'
		    return

		  window.stream = stream
		  # make variable available to browser console
		  video.srcObject = stream
		  return

		'use strict'
		window.video = document.querySelector('video')
		# Put variables in global scope to make them available to the browser console.
		constraints = window.constraints =
		  audio: false
		  video: true

		navigator.mediaDevices.getUserMedia(constraints).then handleSuccess
		# print navigator.mediaDevices, video, stream
