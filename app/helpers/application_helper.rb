module ApplicationHelper

  def flash_class(level)
    case level
      when :notice then "info"
      when :success then "success"
      when :error then "error"
      when :alert then "warning"
    end
  end

  #def markdown(text)
  #  options = [:hard_wrap => true, :filter_html => true, :autolink => true, :no_intraemphasis => true, :fenced_code => true, :gh_blockcode => true]
  #  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, *options)
  #  raw markdown.render(text)
  #end

  class HTMLwithPygments < Redcarpet::Render::HTML
    def block_code(code, language)
      sha = Digest::SHA1.hexdigest(code)
      Rails.cache.fetch ["code", language, sha].join('-') do
        Pygments.highlight(code, lexer: language)
      end
    end
  end

  def markdown(text)
    renderer = HTMLwithPygments.new(hard_wrap: true, filter_html: true)
    options = {
      autolink: true,
      no_intra_emphasis: true,
      fenced_code_blocks: true,
      lax_html_blocks: true,
      strikethrough: true,
      superscript: true
    }
    Redcarpet::Markdown.new(renderer, options).render(text).html_safe
  end
end
