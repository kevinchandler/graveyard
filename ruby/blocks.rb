class Span
  attr_reader :name, :options

  def initialize(name, options)
    @name = name
    @options = options
  end
  def service=(name)
    @service = name
  end

  def service
    @service
  end

  def resource=(name)
    @resource = name
  end

  def resource
    @resource
  end

  def finish
    puts "Submitting Metrics for #{@name}"
    puts "Options: #{@options.inspect}" if @options.any?
    puts "service: #{@service}" if @service
    puts "resource: #{@resource}" if @resource
    puts
  end
end

class Tracer
  def self.trace(name, options = {}, &block)
    span = Span.new(name, options)
    if block_given?
      if block.arity == 1
        yield span
      else
        yield
      end
    end

    span.finish
  end
end

class Datadog
  def self.tracer
    return Tracer
  end
end


tracer = Datadog.tracer

# with block using span
tracer.trace('meow', analytics: true) do |span|
  span.resource = 'mock-resource'
  span.service = 'mock-service'
end


# without block
tracer.trace('woof')


