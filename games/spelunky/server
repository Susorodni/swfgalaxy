#!/usr/bin/env python
import signal, sys, exceptions, BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"

# We create an override for stderr logging to
# reduce terminal print out clutter.
# Normally HTTP requests get logged to the terminal
class PreventLogging(object):
  def __init__(self, filename="Default.log"):
    self.terminal = sys.stdout
    self.enabled = True
    return
      
  def write(self, message):
    return
    
sys.stderr = PreventLogging()

if sys.argv[1:]:
  port = int(sys.argv[1])
else:
  port = 8080
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)


# Capture Ctrl+C presses so that we exit gracefully
def signal_handler(signal, frame):
  # We enable logging out so we can say the following
  sys.stderr.enabled = True
  print 'Stopping Server'
  sys.exit(0)
signal.signal(signal.SIGINT, signal_handler)

print "  Starting Server (Press Ctrl+C to close)"

# We're done printing out our messages so disable
# logging out
sys.stderr.enabled = False

sa = httpd.socket.getsockname()
print "".join(["  Open http://localhost:",str(port),"/ in your browser."])
httpd.serve_forever()
